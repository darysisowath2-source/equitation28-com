import { NextRequest, NextResponse } from "next/server";

const VERCEL_TOKEN = process.env.V_API_TOKEN;
const PROJECT_ID = "prj_PsD3j1cbhawk0gye1YnQ7AJlkuZc";

async function upsertEnvVar(key: string, value: string) {
  // Try to find existing env var first
  const listRes = await fetch(`https://api.vercel.com/v10/projects/${PROJECT_ID}/env`, {
    headers: { Authorization: `Bearer ${VERCEL_TOKEN}` },
  });
  const listData = await listRes.json();
  const existing = listData.envs?.find((e: { key: string }) => e.key === key);

  if (existing) {
    // Update existing
    const patchRes = await fetch(`https://api.vercel.com/v10/projects/${PROJECT_ID}/env/${existing.id}`, {
      method: "PATCH",
      headers: { Authorization: `Bearer ${VERCEL_TOKEN}`, "Content-Type": "application/json" },
      body: JSON.stringify({ value }),
    });
    return patchRes.ok;
  } else {
    // Create new
    const createRes = await fetch(`https://api.vercel.com/v10/projects/${PROJECT_ID}/env`, {
      method: "POST",
      headers: { Authorization: `Bearer ${VERCEL_TOKEN}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        key,
        value,
        type: "plain",
        target: ["production", "preview", "development"],
      }),
    });
    return createRes.ok;
  }
}

export async function POST(req: NextRequest) {
  const { key } = await req.json();
  if (!key) return NextResponse.json({ success: false, error: "No key provided" });

  const saved = await upsertEnvVar("NEXT_PUBLIC_WEB3FORMS_KEY", key);
  if (!saved) return NextResponse.json({ success: false, error: "Failed to save env var" });

  // Trigger redeploy — find latest production deployment and redeploy it
  const deplRes = await fetch(
    `https://api.vercel.com/v6/deployments?projectId=${PROJECT_ID}&target=production&limit=1`,
    { headers: { Authorization: `Bearer ${VERCEL_TOKEN}` } }
  );
  const deplData = await deplRes.json();
  const latestId = deplData.deployments?.[0]?.uid;

  if (latestId) {
    await fetch(`https://api.vercel.com/v13/deployments?forceNew=1`, {
      method: "POST",
      headers: { Authorization: `Bearer ${VERCEL_TOKEN}`, "Content-Type": "application/json" },
      body: JSON.stringify({ deploymentId: latestId, name: "equitation28-com", target: "production" }),
    });
  }

  return NextResponse.json({ success: true, keySet: true, redeployed: !!latestId });
}
