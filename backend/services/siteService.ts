import { PrismaClient, Site, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

export async function createSite(data: Prisma.SiteCreateInput): Promise<Site> {
  return prisma.site.create({ data });
}

export async function getAllSites(): Promise<(Site & { client: any; alarms: any[] })[]> {
  return prisma.site.findMany({
    include: { client: true, alarms: true },
  });
}

export async function getSiteById(id: number): Promise<(Site & { client: any; alarms: any[] }) | null> {
  return prisma.site.findUnique({
    where: { id },
    include: { client: true, alarms: true },
  });
}

export async function updateSite(id: number, data: Prisma.SiteUpdateInput): Promise<Site | null> {
  try {
    return await prisma.site.update({ where: { id }, data });
  } catch {
    return null;
  }
}

export async function deleteSite(id: number): Promise<boolean> {
  try {
    await prisma.site.delete({ where: { id } });
    return true;
  } catch {
    return false;
  }
}
