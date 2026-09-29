import { Header } from "@/components/shared/Header";
import { TaskKpi } from "@/features/tasks/components/TaskKpi";

export function ManagementPage() {
  return (
    <>
      <Header
        title="Housekeeping Tasks"
        description="Coordinate and monitor housekeeping work across your rooms."
      />
      <TaskKpi />
    </>
  );
}
