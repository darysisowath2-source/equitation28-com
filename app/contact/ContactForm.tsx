"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const fd = new FormData(e.currentTarget);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fd.get("nom"),
          email: fd.get("email"),
          subject: fd.get("sujet"),
          message: fd.get("message"),
        }),
      });
      const data = await res.json();
      setStatus(data.success ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mb-4">
          <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-lg font-bold mb-2" style={{ color: "var(--primary)" }}>Message envoyé !</h3>
        <p className="text-sm text-gray-500">On vous répond sous 24h. SMS acceptés au 06 71 45 27 28.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="nom">Nom complet</label>
        <input
          id="nom" name="nom" type="text" required
          className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
          placeholder="Votre nom"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">Email</label>
        <input
          id="email" name="email" type="email" required
          className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
          placeholder="votre@email.com"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="sujet">Sujet</label>
        <select
          id="sujet" name="sujet"
          className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 bg-white"
        >
          <option>Renseignements cours</option>
          <option>Inscription stage</option>
          <option>Pension propriétaire</option>
          <option>Visite du club</option>
          <option>Autre</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="message">Message</label>
        <textarea
          id="message" name="message" rows={5} required
          className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 resize-none"
          placeholder="Votre message…"
        />
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-amber-500 text-white py-3 rounded-lg font-semibold hover:bg-amber-400 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "loading" ? "Envoi en cours…" : "Envoyer le message"}
      </button>
      {status === "error" && (
        <p className="text-sm text-red-600 text-center">
          Une erreur est survenue. Réessayez ou appelez le 06 71 45 27 28.
        </p>
      )}
    </form>
  );
}
