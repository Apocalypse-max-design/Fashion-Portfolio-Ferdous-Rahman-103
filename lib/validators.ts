import { z } from "zod";

export const profileSchema = z.object({
  name: z.string().min(2).max(100),
  title: z.string().min(2).max(100),
  bio: z.string().min(10).max(500),
  email: z.string().email().optional(),
  phone: z.string().optional(),
  location: z.string().optional(),
  linkedin: z.string().url().optional().or(z.literal("")),
  instagram: z.string().url().optional().or(z.literal("")),
  facebook: z.string().url().optional().or(z.literal("")),
  github: z.string().url().optional().or(z.literal("")),
});

export const skillSchema = z.object({
  name: z.string().min(2).max(50),
  level: z.number().min(0).max(100),
  category: z.string().min(2).max(50),
});

export const experienceSchema = z.object({
  title: z.string().min(2).max(100),
  company: z.string().min(2).max(100),
  location: z.string().min(2).max(100),
  startDate: z.string(),
  endDate: z.string().optional(),
  current: z.boolean().default(false),
  description: z.string().min(10).max(1000),
  type: z.enum(["internship", "workshop", "fashion_show", "freelance", "competition"]),
});

export const projectSchema = z.object({
  title: z.string().min(2).max(100),
  description: z.string().min(10).max(1000),
  category: z.string().min(2).max(50),
  tools: z.array(z.string()).min(1).max(10),
});

export const portfolioItemSchema = z.object({
  title: z.string().min(2).max(100),
  category: z.enum(["sketches", "garments", "illustrations", "technical", "photoshoots"]),
  description: z.string().max(500).optional(),
});

export const certificateSchema = z.object({
  title: z.string().min(2).max(100),
  organization: z.string().min(2).max(100),
  date: z.string(),
  description: z.string().max(500).optional(),
});
