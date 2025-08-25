packages/database/src/seed.ts

import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  // Create subjects
  const subjects = [
    { slug: 'mathematics', name: 'Mathematics', icon: '🧮', color: '#8B5CF6' },
    { slug: 'physics', name: 'Physics', icon: '⚡', color: '#3B82F6' },
    { slug: 'chemistry', name: 'Chemistry', icon: '🧪', color: '#06B6D4' },
    { slug: 'biology', name: 'Biology', icon: '🧬', color: '#10B981' },
    { slug: 'earth-science', name: 'Earth Science', icon: '🌍', color: '#F97316' },
    { slug: 'astronomy-space', name: 'Astronomy & Space', icon: '🚀', color: '#2563EB' },
    { slug: 'computer-science', name: 'Computer Science', icon: '💻', color: '#06B6D4' },
    { slug: 'engineering', name: 'Engineering', icon: '🏗️', color: '#F97316' },
  ];

  for (const subject of subjects) {
    await prisma.subject.upsert({
      where: { slug: subject.slug },
      update: {},
      create: subject,
    });
  }

  // Create admin user
  const hashedPassword = await bcrypt.hash('admin123', 10);
  
  const adminUser = await prisma.user.upsert({
    where: { email: 'admin@stemoria.com' },
    update: {},
    create: {
      email: 'admin@stemoria.com',
      name: 'System Admin',
      hashedPassword,
      role: 'SUPER_ADMIN',
      emailVerified: new Date(),
    },
  });

  // Create sample institution
  const institution = await prisma.institution.create({
    data: {
      name: 'Demo High School',
      slug: 'demo-high-school',
      type: 'SCHOOL',
      country: 'US',
      city: 'New York',
      contactEmail: 'contact@demoschool.edu',
      features: ['VIRTUAL_LABS', 'GAMIFICATION', 'TUTORING'],
      maxStudents: 5000,
      maxTeachers: 200,
    },
  });

  // Create sample teacher
  const teacher = await prisma.user.create({
    data: {
      email: 'teacher@demoschool.edu',
      name: 'Jane Smith',
      hashedPassword: await bcrypt.hash('teacher123', 10),
      role: 'TEACHER',
      emailVerified: new Date(),
      institutions: {
        create: {
          institutionId: institution.id,
          role: 'TEACHER',
        },
      },
    },
  });

  // Create sample student
  const student = await prisma.user.create({
    data: {
      email: 'student@demoschool.edu',
      name: 'John Doe',
      hashedPassword: await bcrypt.hash('student123', 10),
      role: 'STUDENT',
      emailVerified: new Date(),
      institutions: {
        create: {
          institutionId: institution.id,
          role: 'STUDENT',
        },
      },
    },
  });

  // Create sample plans
  const plans = [
    {
      name: 'Individual Student',
      slug: 'individual-student',
      price: 9.99,
      interval: 'MONTHLY' as const,
      features: ['Access to all subjects', 'Basic tools', 'Progress tracking'],
      limits: { lessonsPerMonth: 100, storageGB: 5 },
    },
    {
      name: 'School Basic',
      slug: 'school-basic',
      price: 499,
      interval: 'MONTHLY' as const,
      features: ['Up to 100 students', 'Teacher dashboards', 'Basic analytics'],
      limits: { students: 100, teachers: 10, storageGB: 50 },
    },
    {
      name: 'School Premium',
      slug: 'school-premium',
      price: 1999,
      interval: 'MONTHLY' as const,
      features: ['Unlimited students', 'Advanced analytics', 'VR/AR labs', 'Priority support'],
      limits: { students: -1, teachers: -1, storageGB: 500 },
    },
  ];

  for (const plan of plans) {
    await prisma.plan.upsert({
      where: { slug: plan.slug },
      update: {},
      create: plan,
    });
  }

  console.log('✅ Database seeded successfully');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });