// apps/admin/app/content/page.tsx
import { prisma } from '@stemoria/database';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LessonTable } from '@/components/admin/content/lesson-table';
import { ToolTable } from '@/components/admin/content/tool-table';
import { GameTable } from '@/components/admin/content/game-table';
import { LabTable } from '@/components/admin/content/lab-table';
import { ContentStats } from '@/components/admin/content/content-stats';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

export default async function ContentPage() {
  const [lessons, tools, games, labs] = await Promise.all([
    prisma.lesson.findMany({
      include: {
        subject: true,
        unit: true,
        _count: {
          select: {
            progress: true,
          },
        },
      },
      orderBy: { updatedAt: 'desc' },
      take: 50,
    }),
    prisma.tool.findMany({
      include: {
        subject: true,
        _count: {
          select: {
            usage: true,
          },
        },
      },
      orderBy: { updatedAt: 'desc' },
      take: 50,
    }),
    prisma.game.findMany({
      include: {
        subject: true,
        _count: {
          select: {
            scores: true,
          },
        },
      },
      orderBy: { updatedAt: 'desc' },
      take: 50,
    }),
    prisma.lab.findMany({
      include: {
        subject: true,
        _count: {
          select: {
            sessions: true,
          },
        },
      },
      orderBy: { updatedAt: 'desc' },
      take: 50,
    }),
  ]);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Content Management</h1>
          <p className="text-gray-600">Manage all learning content</p>
        </div>
      </div>

      <ContentStats />

      <Tabs defaultValue="lessons" className="space-y-4">
        <TabsList>
          <TabsTrigger value="lessons">Lessons</TabsTrigger>
          <TabsTrigger value="tools">Tools</TabsTrigger>
          <TabsTrigger value="games">Games</TabsTrigger>
          <TabsTrigger value="labs">Labs</TabsTrigger>
        </TabsList>

        <TabsContent value="lessons" className="space-y-4">
          <div className="flex justify-end">
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Create Lesson
            </Button>
          </div>
          <LessonTable lessons={lessons} />
        </TabsContent>

        <TabsContent value="tools" className="space-y-4">
          <div className="flex justify-end">
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Tool
            </Button>
          </div>
          <ToolTable tools={tools} />
        </TabsContent>

        <TabsContent value="games" className="space-y-4">
          <div className="flex justify-end">
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Create Game
            </Button>
          </div>
          <GameTable games={games} />
        </TabsContent>

        <TabsContent value="labs" className="space-y-4">
          <div className="flex justify-end">
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Lab
            </Button>
          </div>
          <LabTable labs={labs} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
