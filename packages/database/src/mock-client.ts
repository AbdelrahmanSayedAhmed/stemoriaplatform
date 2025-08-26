// Mock Prisma client for build testing when actual Prisma client is not available
// This is a temporary workaround to allow the build to succeed

export class MockPrismaClient {
  user = {
    count: async (args?: any) => 42,
    findMany: async (args?: any) => [],
    findUnique: async (args?: any) => null,
    create: async (args?: any) => ({ id: 'mock', email: 'mock@example.com' }),
    update: async (args?: any) => ({ id: 'mock', email: 'mock@example.com' }),
    upsert: async (args?: any) => ({ id: 'mock', email: 'mock@example.com' }),
  };
  
  course = {
    count: async (args?: any) => 15,
    findMany: async (args?: any) => [],
    findUnique: async (args?: any) => null,
    create: async (args?: any) => ({ id: 'mock', title: 'Mock Course' }),
    update: async (args?: any) => ({ id: 'mock', title: 'Mock Course' }),
    upsert: async (args?: any) => ({ id: 'mock', title: 'Mock Course' }),
  };

  lesson = {
    count: async (args?: any) => 25,
    findMany: async (args?: any) => [],
    findUnique: async (args?: any) => null,
    create: async (args?: any) => ({ id: 'mock', title: 'Mock Lesson' }),
    update: async (args?: any) => ({ id: 'mock', title: 'Mock Lesson' }),
    upsert: async (args?: any) => ({ id: 'mock', title: 'Mock Lesson' }),
  };

  tool = {
    count: async (args?: any) => 8,
    findMany: async (args?: any) => [],
    findUnique: async (args?: any) => null,
    create: async (args?: any) => ({ id: 'mock', name: 'Mock Tool' }),
    update: async (args?: any) => ({ id: 'mock', name: 'Mock Tool' }),
    upsert: async (args?: any) => ({ id: 'mock', name: 'Mock Tool' }),
  };

  game = {
    count: async (args?: any) => 12,
    findMany: async (args?: any) => [],
    findUnique: async (args?: any) => null,
    create: async (args?: any) => ({ id: 'mock', name: 'Mock Game' }),
    update: async (args?: any) => ({ id: 'mock', name: 'Mock Game' }),
    upsert: async (args?: any) => ({ id: 'mock', name: 'Mock Game' }),
  };

  lab = {
    count: async (args?: any) => 6,
    findMany: async (args?: any) => [],
    findUnique: async (args?: any) => null,
    create: async (args?: any) => ({ id: 'mock', name: 'Mock Lab' }),
    update: async (args?: any) => ({ id: 'mock', name: 'Mock Lab' }),
    upsert: async (args?: any) => ({ id: 'mock', name: 'Mock Lab' }),
  };
  
  async $disconnect() {
    return Promise.resolve();
  }
  
  async $connect() {
    return Promise.resolve();
  }
}

export { MockPrismaClient as PrismaClient };