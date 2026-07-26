import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  // Create admin user
  const hashedPassword = await bcrypt.hash("admin123", 12);
  await prisma.user.upsert({
    where: { email: "admin@ferdous.com" },
    update: {},
    create: {
      email: "admin@ferdous.com",
      password: hashedPassword,
      name: "Md. Ferdous Rahman Fakir",
      role: "admin",
    },
  });

  // Create profile
  await prisma.profile.upsert({
    where: { id: "main-profile" },
    update: {},
    create: {
      id: "main-profile",
      name: "Md. Ferdous Rahman Fakir",
      title: "Fashion Designer & Student",
      bio: "Fashion Design Student at Port City International University, Chattogram. Passionate about creating innovative designs that blend tradition with modernity.",
      heroTitle: "Md. Ferdous Rahman Fakir",
      heroSubtitle: "Fashion Designer & Student",
      aboutText: "I am Md. Ferdous Rahman Fakir, a passionate fashion design student at Port City International University in Chattogram, Bangladesh.",
      careerObjective: "To become a leading fashion designer who bridges traditional craftsmanship with contemporary innovation.",
      interests: "Fashion illustration, sustainable design, textile manipulation, cultural fashion research.",
      passionStory: "Fashion, for me, is more than just clothing—it's a language of self-expression, a bridge between culture and innovation.",
      email: "ferdous.fashion@email.com",
      phone: "+880 1XXX-XXXXXX",
      location: "Chattogram, Bangladesh",
    },
  });

  // Create skills
  const skills = [
    { name: "Fashion Illustration", level: 85, category: "Fashion Skills" },
    { name: "Pattern Making", level: 80, category: "Fashion Skills" },
    { name: "Garment Construction", level: 78, category: "Fashion Skills" },
    { name: "Sewing", level: 82, category: "Fashion Skills" },
    { name: "Textile Knowledge", level: 75, category: "Fashion Skills" },
    { name: "Fashion Merchandising", level: 70, category: "Fashion Skills" },
    { name: "Adobe Illustrator", level: 80, category: "Software" },
    { name: "Adobe Photoshop", level: 78, category: "Software" },
    { name: "CLO 3D", level: 65, category: "Software" },
    { name: "Microsoft Office", level: 85, category: "Software" },
    { name: "Leadership", level: 75, category: "Professional Skills" },
    { name: "Communication", level: 85, category: "Professional Skills" },
    { name: "Teamwork", level: 90, category: "Professional Skills" },
    { name: "Presentation", level: 80, category: "Professional Skills" },
  ];

  for (let i = 0; i < skills.length; i++) {
    await prisma.skill.create({
      data: { ...skills[i], order: i },
    });
  }

  // Create education
  await prisma.education.create({
    data: {
      degree: "B.Sc. in Fashion Design & Technology (Honours)",
      institution: "Port City International University",
      location: "Chattogram, Bangladesh",
      startDate: "2023",
      endDate: "2027",
      current: true,
      description: "Currently in 2nd year, specializing in fashion design, pattern making, garment construction, and textile studies.",
      order: 0,
    },
  });

  console.log("Database seeded successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
