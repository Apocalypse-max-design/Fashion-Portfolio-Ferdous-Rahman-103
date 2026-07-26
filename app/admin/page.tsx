"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  User,
  Wrench,
  Briefcase,
  FolderOpen,
  Image,
  Award,
  FileText,
  Phone,
  Settings,
  LogOut,
  Menu,
  X,
  Upload,
  Plus,
  Trash2,
  Edit,
  Eye,
  Check,
} from "lucide-react";
import { useRouter } from "next/navigation";

const sidebarItems = [
  { name: "Dashboard", icon: LayoutDashboard, section: "dashboard" },
  { name: "Profile", icon: User, section: "profile" },
  { name: "Skills", icon: Wrench, section: "skills" },
  { name: "Experience", icon: Briefcase, section: "experience" },
  { name: "Projects", icon: FolderOpen, section: "projects" },
  { name: "Portfolio", icon: Image, section: "portfolio" },
  { name: "Certificates", icon: Award, section: "certificates" },
  { name: "CV", icon: FileText, section: "cv" },
  { name: "Contact", icon: Phone, section: "contact" },
  { name: "Settings", icon: Settings, section: "settings" },
];

interface Skill {
  id: string;
  name: string;
  level: number;
  category: string;
  order: number;
}

interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  description: string;
  type: string;
  order: number;
}

interface Certificate {
  id: string;
  title: string;
  organization: string;
  date: string;
  description?: string;
  imageUrl?: string;
  pdfUrl?: string;
  order: number;
}

function DashboardOverview() {
  const [stats, setStats] = useState({
    projects: 0,
    portfolio: 0,
    certificates: 0,
    skills: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [skillsRes, certsRes] = await Promise.all([
          fetch("/api/admin/skills"),
          fetch("/api/admin/certificates"),
        ]);
        const skills = await skillsRes.json();
        const certs = await certsRes.json();
        setStats({
          projects: 6,
          portfolio: 12,
          certificates: certs.length || 5,
          skills: skills.length || 14,
        });
      } catch (error) {
        console.error("Error fetching stats:", error);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-white font-[var(--font-space)]">Welcome back, Ferdous!</h2>
        <p className="text-gray-400 mt-1">Here&apos;s what&apos;s happening with your portfolio.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Projects", value: stats.projects, color: "#4CAF50" },
          { label: "Portfolio Items", value: stats.portfolio, color: "#FF9800" },
          { label: "Certificates", value: stats.certificates, color: "#D90429" },
          { label: "Skills", value: stats.skills, color: "#4A90D9" },
        ].map((stat) => (
          <div key={stat.label} className="p-6 rounded-xl glass border border-white/5">
            <p className="text-sm text-gray-400">{stat.label}</p>
            <p className="text-3xl font-bold mt-2" style={{ color: stat.color }}>
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="p-6 rounded-xl glass border border-white/5">
        <h3 className="text-lg font-bold text-white mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { label: "Add Project", icon: Plus, color: "#D90429" },
            { label: "Upload Image", icon: Upload, color: "#4A90D9" },
            { label: "Add Skill", icon: Wrench, color: "#4CAF50" },
            { label: "Edit Profile", icon: Edit, color: "#FF9800" },
          ].map((action) => (
            <button
              key={action.label}
              className="flex items-center gap-2 p-3 rounded-lg bg-white/5 hover:bg-white/10 text-sm text-gray-300 transition-colors"
            >
              <action.icon size={16} style={{ color: action.color }} />
              {action.label}
            </button>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="p-6 rounded-xl glass border border-white/5">
        <h3 className="text-lg font-bold text-white mb-4">Recent Activity</h3>
        <div className="space-y-3">
          {[
            { action: "Updated hero section text", time: "2 hours ago" },
            { action: "Added new project: Sustainable Streetwear", time: "1 day ago" },
            { action: "Uploaded 3 portfolio images", time: "3 days ago" },
            { action: "Updated contact information", time: "1 week ago" },
          ].map((item, i) => (
            <div key={i} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
              <span className="text-sm text-gray-400">{item.action}</span>
              <span className="text-xs text-gray-600">{item.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProfileEditor() {
  const [profile, setProfile] = useState({
    name: "",
    title: "",
    bio: "",
    email: "",
    phone: "",
    location: "",
  });

  useEffect(() => {
    fetch("/api/admin/profile")
      .then((r) => r.json())
      .then((data) => setProfile(data))
      .catch(console.error);
  }, []);

  const handleSave = async () => {
    try {
      const response = await fetch("/api/admin/profile", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(profile),
      });
      if (response.ok) alert("Profile updated!");
    } catch (error) {
      console.error("Error saving profile:", error);
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white font-[var(--font-space)]">Profile Settings</h2>

      <div className="p-6 rounded-xl glass border border-white/5 space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">Full Name</label>
          <input
            type="text"
            value={profile.name}
            onChange={(e) => setProfile({ ...profile, name: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-[#D90429]/50 outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">Professional Title</label>
          <input
            type="text"
            value={profile.title}
            onChange={(e) => setProfile({ ...profile, title: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-[#D90429]/50 outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">Bio</label>
          <textarea
            rows={4}
            value={profile.bio}
            onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-[#D90429]/50 outline-none resize-none"
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
            <input
              type="email"
              value={profile.email}
              onChange={(e) => setProfile({ ...profile, email: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-[#D90429]/50 outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Phone</label>
            <input
              type="tel"
              value={profile.phone}
              onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-[#D90429]/50 outline-none"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">Location</label>
          <input
            type="text"
            value={profile.location}
            onChange={(e) => setProfile({ ...profile, location: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-[#D90429]/50 outline-none"
          />
        </div>

        <button
          onClick={handleSave}
          className="px-6 py-3 bg-[#D90429] rounded-xl text-white font-medium hover:bg-[#FF1744] transition-colors flex items-center gap-2"
        >
          <Check size={18} />
          Save Changes
        </button>
      </div>
    </div>
  );
}

function SkillsManager() {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSkills();
  }, []);

  const fetchSkills = async () => {
    try {
      const response = await fetch("/api/admin/skills");
      const data = await response.json();
      setSkills(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching skills:", error);
      setLoading(false);
    }
  };

  const deleteSkill = async (id: string) => {
    try {
      await fetch(`/api/admin/skills?id=${id}`, { method: "DELETE" });
      setSkills(skills.filter((s) => s.id !== id));
    } catch (error) {
      console.error("Error deleting skill:", error);
    }
  };

  if (loading) return <div className="text-gray-400">Loading skills...</div>;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white font-[var(--font-space)]">Skills Manager</h2>
        <button className="flex items-center gap-2 px-4 py-2 bg-[#D90429] rounded-lg text-sm text-white hover:bg-[#FF1744] transition-colors">
          <Plus size={16} />
          Add Skill
        </button>
      </div>

      <div className="space-y-3">
        {skills.map((skill) => (
          <div key={skill.id} className="flex items-center justify-between p-4 rounded-xl glass border border-white/5">
            <div className="flex-1">
              <p className="text-white font-medium">{skill.name}</p>
              <div className="flex items-center gap-4 mt-2">
                <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#D90429] rounded-full"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
                <span className="text-xs text-gray-500">{skill.level}%</span>
              </div>
            </div>
            <div className="flex gap-2 ml-4">
              <button className="p-2 rounded-lg hover:bg-white/10 text-gray-400 transition-colors">
                <Edit size={16} />
              </button>
              <button
                onClick={() => deleteSkill(skill.id)}
                className="p-2 rounded-lg hover:bg-red-500/10 text-red-400 transition-colors"
              >
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ExperienceManager() {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchExperiences();
  }, []);

  const fetchExperiences = async () => {
    try {
      const response = await fetch("/api/admin/experience");
      const data = await response.json();
      setExperiences(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching experiences:", error);
      setLoading(false);
    }
  };

  const deleteExperience = async (id: string) => {
    try {
      await fetch(`/api/admin/experience?id=${id}`, { method: "DELETE" });
      setExperiences(experiences.filter((e) => e.id !== id));
    } catch (error) {
      console.error("Error deleting experience:", error);
    }
  };

  if (loading) return <div className="text-gray-400">Loading experiences...</div>;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white font-[var(--font-space)]">Experience Manager</h2>
        <button className="flex items-center gap-2 px-4 py-2 bg-[#D90429] rounded-lg text-sm text-white hover:bg-[#FF1744] transition-colors">
          <Plus size={16} />
          Add Experience
        </button>
      </div>

      <div className="space-y-3">
        {experiences.map((exp) => (
          <div key={exp.id} className="flex items-center justify-between p-4 rounded-xl glass border border-white/5">
            <div>
              <p className="text-white font-medium">{exp.title}</p>
              <p className="text-xs text-[#D90429]">{exp.company}</p>
              <p className="text-xs text-gray-500">{exp.startDate} - {exp.endDate || "Present"}</p>
            </div>
            <div className="flex gap-2">
              <button className="p-2 rounded-lg hover:bg-white/10 text-gray-400 transition-colors">
                <Edit size={16} />
              </button>
              <button
                onClick={() => deleteExperience(exp.id)}
                className="p-2 rounded-lg hover:bg-red-500/10 text-red-400 transition-colors"
              >
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CertificatesManager() {
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCertificates();
  }, []);

  const fetchCertificates = async () => {
    try {
      const response = await fetch("/api/admin/certificates");
      const data = await response.json();
      setCertificates(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching certificates:", error);
      setLoading(false);
    }
  };

  const deleteCertificate = async (id: string) => {
    try {
      await fetch(`/api/admin/certificates?id=${id}`, { method: "DELETE" });
      setCertificates(certificates.filter((c) => c.id !== id));
    } catch (error) {
      console.error("Error deleting certificate:", error);
    }
  };

  if (loading) return <div className="text-gray-400">Loading certificates...</div>;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white font-[var(--font-space)]">Certificates Manager</h2>
        <button className="flex items-center gap-2 px-4 py-2 bg-[#D90429] rounded-lg text-sm text-white hover:bg-[#FF1744] transition-colors">
          <Plus size={16} />
          Add Certificate
        </button>
      </div>

      <div className="space-y-3">
        {certificates.map((cert) => (
          <div key={cert.id} className="flex items-center justify-between p-4 rounded-xl glass border border-white/5">
            <div>
              <p className="text-white font-medium">{cert.title}</p>
              <p className="text-xs text-[#D90429]">{cert.organization}</p>
              <p className="text-xs text-gray-500">{cert.date}</p>
            </div>
            <div className="flex gap-2">
              <button className="p-2 rounded-lg hover:bg-white/10 text-gray-400 transition-colors">
                <Edit size={16} />
              </button>
              <button
                onClick={() => deleteCertificate(cert.id)}
                className="p-2 rounded-lg hover:bg-red-500/10 text-red-400 transition-colors"
              >
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ContactMessagesViewer() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await fetch("/api/admin/messages");
      const data = await response.json();
      setMessages(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching messages:", error);
      setLoading(false);
    }
  };

  if (loading) return <div className="text-gray-400">Loading messages...</div>;

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white font-[var(--font-space)]">Contact Messages</h2>

      <div className="space-y-3">
        {messages.length === 0 ? (
          <div className="text-gray-400 p-6 text-center">No messages yet</div>
        ) : (
          messages.map((msg: any) => (
            <div key={msg.id} className="p-4 rounded-xl glass border border-white/5 hover:border-[#D90429]/30">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <p className="text-white font-medium">{msg.name}</p>
                  <p className="text-sm text-gray-400">{msg.email}</p>
                  <p className="text-sm text-[#D90429] mt-1">{msg.subject}</p>
                  <p className="text-sm text-gray-300 mt-2">{msg.message}</p>
                </div>
                <span className="text-xs text-gray-500">
                  {new Date(msg.createdAt).toLocaleDateString()}
                </span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

function SettingsPage() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await fetch("/api/auth/logout", { method: "POST" });
      router.push("/admin/login");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white font-[var(--font-space)]">Settings</h2>

      <div className="p-6 rounded-xl glass border border-white/5 space-y-6">
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Account</h3>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-6 py-3 bg-red-600/20 border border-red-600/30 rounded-xl text-red-400 hover:bg-red-600/30 transition-colors"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default function AdminDashboard() {
  const [activeSection, setActiveSection] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const renderContent = () => {
    switch (activeSection) {
      case "dashboard":
        return <DashboardOverview />;
      case "profile":
        return <ProfileEditor />;
      case "skills":
        return <SkillsManager />;
      case "experience":
        return <ExperienceManager />;
      case "certificates":
        return <CertificatesManager />;
      case "contact":
        return <ContactMessagesViewer />;
      case "settings":
        return <SettingsPage />;
      default:
        return (
          <div className="flex items-center justify-center h-64">
            <p className="text-gray-500">Section under development</p>
          </div>
        );
    }
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <motion.aside
        initial={false}
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-[#0B0B0B] border-r border-white/5 transform transition-transform duration-300 lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-6 border-b border-white/5">
            <h1 className="text-xl font-bold font-[var(--font-space)]">
              <span className="text-white">FERDOUS</span>
              <span className="text-[#D90429]">.</span>
            </h1>
            <p className="text-xs text-gray-500 mt-1">Admin Dashboard</p>
          </div>

          {/* Nav Items */}
          <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
            {sidebarItems.map((item) => (
              <button
                key={item.section}
                onClick={() => {
                  setActiveSection(item.section);
                  setSidebarOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                  activeSection === item.section
                    ? "bg-[#D90429]/10 text-[#D90429] border border-[#D90429]/20"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <item.icon size={18} />
                {item.name}
              </button>
            ))}
          </nav>
        </div>
      </motion.aside>

      {/* Main Content */}
      <div className="flex-1 lg:ml-64 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <header className="sticky top-0 z-40 flex items-center justify-between px-6 py-4 bg-[#0B0B0B]/80 backdrop-blur-sm border-b border-white/5">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-white/5 text-gray-400"
          >
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          <div className="flex items-center gap-3 ml-auto">
            <div className="w-8 h-8 rounded-full bg-[#D90429]/20 border border-[#D90429]/30 flex items-center justify-center">
              <span className="text-xs font-bold text-[#D90429]">FR</span>
            </div>
            <span className="text-sm text-gray-400 hidden sm:block">Ferdous</span>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto p-6 lg:p-8">
          {renderContent()}
        </main>
      </div>

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}
