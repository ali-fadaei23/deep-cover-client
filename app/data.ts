export type TestMutation = {
  id?: number;
  name?: string;
  titleTemplate?: string;
  keyOption?: string;
  manifestOption?: string;
  valueOrObject?: string;
  version?: string;
  agent?: string;
  url?: string;
  headers?: string;
  debounce?: string;
  payload?: string;
  payloadRoot?: string;
};

export type Test = TestMutation & {
  id: number;
  createdAt: string;
};

const fakeTest = {
  records: {} as Record<string, Test>,
  async getAll(): Promise<Test[]> {
    return Object.keys(fakeTest.records).map((key) => fakeTest.records[key]);
  },
  async get(id: number): Promise<Test> {
    return fakeTest.records[id] || null;
  },
  async create(values: TestMutation): Promise<Test> {
    const id = values.id || Math.round(Math.random() * 100);
    const createdAt = new Date().toISOString();
    const newTest = { id, createdAt, ...values };
    fakeTest.records[id] = newTest;
    return newTest;
  },
  async set(id: number, values: TestMutation): Promise<Test> {
    const test = await fakeTest.get(id);
    const updatedTest = { ...test, ...values };
    fakeTest.records[id] = updatedTest;
    return updatedTest;
  },

  destroy(id: number): null {
    delete fakeTest.records[id];
    return null;
  },
};

export async function getTests() {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return await fakeTest.getAll();
}

export async function createTest(updates: TestMutation) {
  const test = await fakeTest.create(updates);
  return test;
}

export async function getTest(id: number) {
  return fakeTest.get(id);
}

export async function updateTest(id: number, updates: TestMutation) {
  const test = await fakeTest.get(id);
  if (!test) {
    throw new Error(`No test found for ${id}`);
  }
  await fakeTest.set(id, { ...test, ...updates });
  return test;
}

export async function deleteTest(id: number) {
  fakeTest.destroy(id);
}
