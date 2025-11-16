// src/pages/Contact.tsx
export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-lg">
        <h1 className="text-3xl font-bold">Contact</h1>
        <p className="mt-3 text-slate-700">
          Reach out for collaborations, UI/UX projects, or frontend work.
        </p>
        <form className="mt-6 space-y-3 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <div>
            <label className="mb-1 block text-sm font-medium">Name</label>
            <input className="w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium">Email</label>
            <input type="email" className="w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium">Message</label>
            <textarea rows={4} className="w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          </div>
          <button type="button" className="inline-flex items-center rounded-md bg-indigo-600 px-4 py-2 font-semibold text-white hover:bg-indigo-500">
            Send
          </button>
        </form>
      </div>
    </div>
  )
}
