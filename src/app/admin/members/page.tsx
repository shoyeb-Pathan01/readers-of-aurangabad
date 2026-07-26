"use client"

import { Users, Shield, ShieldOff } from "lucide-react"

const members = [
  { id: "1", name: "Priya Sharma", email: "priya@example.com", role: "member" as const, joined: "Jan 2024" },
  { id: "2", name: "Rahul Deshmukh", email: "rahul@example.com", role: "admin" as const, joined: "Nov 2023" },
  { id: "3", name: "Ananya Patil", email: "ananya@example.com", role: "member" as const, joined: "Mar 2024" },
  { id: "4", name: "Vikram Mehta", email: "vikram@example.com", role: "member" as const, joined: "Feb 2024" },
  { id: "5", name: "Neha Kulkarni", email: "neha@example.com", role: "member" as const, joined: "Apr 2024" },
]

export default function AdminMembersPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="font-heading text-xl tracking-wide text-[--text-primary]">Members</h1>
        <p className="text-sm text-[--text-secondary]">{members.length} registered members</p>
      </div>

      <div className="rounded-lg border border-[--border-hairline] bg-[--surface-card] overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-[--border-hairline] bg-[--bg-alt]">
              <th className="px-4 py-3 text-left text-xs font-medium text-[--text-secondary]">Name</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-[--text-secondary]">Email</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-[--text-secondary]">Role</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-[--text-secondary]">Joined</th>
              <th className="px-4 py-3 text-right text-xs font-medium text-[--text-secondary]">Actions</th>
            </tr>
          </thead>
          <tbody>
            {members.map((member) => (
              <tr key={member.id} className="border-b border-[--border-hairline] last:border-0">
                <td className="px-4 py-3 text-[--text-primary]">{member.name}</td>
                <td className="px-4 py-3 text-[--text-secondary]">{member.email}</td>
                <td className="px-4 py-3">
                  <span
                    className={`rounded-full px-2 py-0.5 text-[10px] ${
                      member.role === "admin"
                        ? "bg-[--accent-gold]/10 text-[--accent-gold]"
                        : "bg-[--bg-alt] text-[--text-secondary]"
                    }`}
                  >
                    {member.role}
                  </span>
                </td>
                <td className="px-4 py-3 text-[--text-secondary]">{member.joined}</td>
                <td className="px-4 py-3 text-right">
                  <button
                    className="rounded border border-[--border-hairline] px-2.5 py-1 text-[11px] text-[--text-secondary] hover:border-[--accent-gold] hover:text-[--accent-gold] transition-colors"
                    title={member.role === "admin" ? "Remove admin" : "Make admin"}
                  >
                    {member.role === "admin" ? (
                      <ShieldOff className="h-3 w-3" />
                    ) : (
                      <Shield className="h-3 w-3" />
                    )}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
