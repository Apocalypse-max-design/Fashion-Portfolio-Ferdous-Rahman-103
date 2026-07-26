"use client";

import { useState } from "react";
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
} from "lucide-react";

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

function DashboardOverview() {
  const stats = [
    { label: "Projects", value: "6", color: "#4CAF50" },
    { label: "Portfolio Items", value: "12", color: "#FF9800" },
    { label: "Certificates", value: "5", color: "#D90429" },
    { label: "Skills", value: "14", color: "#4A90D9" },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-white font-[var(--font-space)]">Welcome back, Ferdous!</h2>
        <p className="text-gray-400 mt-1">Here&apos;s what&apos;s happening with your portfolio.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
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
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white font-[var(--font-space)]">Profile Settings</h2>
      
      <div className="p-6 rounded-xl glass border border-white/5 space-y-6">
        {/* Profile Photo */}
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-3">Profile Photo</label>
          <div className="flex items-center gap-4">
            <div className="w-24 h-24 rounded-full bg-[#1A1A2E] border-2 border-[#D90429]/30 flex items-center justify-center">
              <User size={32} className="text-[#D90429]/50" />
            </div>
            <button className="px-4 py-2 bg-[#D90429] rounded-lg text-sm text-white hover:bg-[#FF1744] transition-colors">
              Upload New Photo
            </button>
          </div>
        </div>

        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">Full Name</label>
          <input
            type="text"
            defaultValue="Md. Ferdous Rahman Fakir"
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-[#D90429]/50 outline-none"
          />
        </div>

        {/* Title */}
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">Professional Title</label>
          <input
            type="text"
            defaultValue="Fashion Designer & Student"
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-[#D90429]/50 outline-none"
          />
        </div>

        {/* Bio */}
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">Short Introduction</label>
          <textarea
            rows={4}
            defaultValue="Fashion Design Student at Port City International University, Chattogram. Passionate about creating innovative designs that blend tradition with modernity."
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-[#D90429]/50 outline-none resize-none"
          />
        </div>

        <button className="px-6 py-3 bg-[#D90429] rounded-xl text-white font-medium hover:bg-[#FF1744] transition-colors">
          Save Changes
        </button>
      </div>
    </div>
  );
}

function SkillsManager() {
  const skills = [
    { name: "Fashion Illustration", level: 85, category: "Fashion" },
    { name: "Pattern Making", level: 80, category: "Fashion" },
    { name: "Adobe Illustrator", level: 80, category: "Software" },
    { name: "Leadership", level: 75, category: "Professional" },
  ];

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
        {skills.map((skill, i) => (
          <div key={i} className="flex items-center justify-between p-4 rounded-xl glass border border-white/5">
            <div>
              <p className="text-white font-medium">{skill.name}</p>
              <p className="text-xs text-gray-500">{skill.category} • {skill.level}%</p>
            </div>
            <div className="flex gap-2">
              <button className="p-2 rounded-lg hover:bg-white/10 text-gray-400 transition-colors">
                <Edit size={16} />
              </button>
              <button className="p-2 rounded-lg hover:bg-red-500/10 text-red-400 transition-colors">
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProjectsManager() {
  const projects = [
    { title: "Traditional Bengali Fusion Collection", category: "Collection Design", status: "Published" },
    { title: "Sustainable Streetwear Line", category: "Sustainable Fashion", status: "Published" },
    { title: "Digital Fashion Illustration Series", category: "Illustration", status: "Draft" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white font-[var(--font-space)]">Projects Manager</h2>
        <button className="flex items-center gap-2 px-4 py-2 bg-[#D90429] rounded-lg text-sm text-white hover:bg-[#FF1744] transition-colors">
          <Plus size={16} />
          Add Project
        </button>
      </div>

      <div className="space-y-3">
        {projects.map((project, i) => (
          <div key={i} className="flex items-center justify-between p-4 rounded-xl glass border border-white/5">
            <div>
              <p className="text-white font-medium">{project.title}</p>
              <p className="text-xs text-gray-500">{project.category}</p>
            </div>
            <div className="flex items-center gap-3">
              <span className={`px-2 py-0.5 text-[10px] rounded-full ${
                project.status === "Published" ? "bg-green-500/10 text-green-400" : "bg-yellow-500/10 text-yellow-400"
              }`}>
                {project.status}
              </span>
              <button className="p-2 rounded-lg hover:bg-white/10 text-gray-400 transition-colors">
                <Eye size={16} />
              </button>
              <button className="p-2 rounded-lg hover:bg-white/10 text-gray-400 transition-colors">
                <Edit size={16} />
              </button>
              <button className="p-2 rounded-lg hover:bg-red-500/10 text-red-400 transition-colors">
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        ))}
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
      case "projects":
        return <ProjectsManager />;
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

          {/* Logout */}
          <div className="p-4 border-t border-white/5">
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-gray-400 hover:text-red-400 hover:bg-red-500/5 transition-all">
              <LogOut size={18} />
              Logout
            </button>
          </div>
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
