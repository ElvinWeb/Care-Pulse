import { getAppoinmentList } from "@/lib/actions/appointment.actions";
import { StatCard } from "@/components/StatCard";
import { columns } from "@/components/table/columns";
import DataTable from "@/components/table/DataTable";
import Image from "next/image";
import Link from "next/link";

export default async function Admin() {
  const appointments = await getAppoinmentList();

  return (
    <div className="mx-auto flex max-w-7xl flex-col space-y-14">
      <header className="admin-header">
        <Link href="/" className="cursor-pointer">
          <Image
            src="/assets/icons/logo-full.svg"
            height={32}
            width={162}
            alt="logo"
            className="h-8 w-fit"
          />
        </Link>

        <p className="text-16-semibold">Admin Dashboard</p>
      </header>

      <main className="admin-main">
        <section className="w-full space-y-4">
          <h1 className="header">Appointments📝</h1>
          <p className="text-dark-700">
            Start the day with managing new appointments
          </p>
        </section>

        <section className="admin-stat">
          <StatCard
            type="appointments"
            label="Scheduled appointments"
            icon="/assets/icons/appointments.svg"
            count={appointments.scheduledCount}
          />
          <StatCard
            type="pending"
            label="Pending appointments"
            icon="/assets/icons/pending.svg"
            count={appointments.pendingCount}
          />
          <StatCard
            type="cancelled"
            label="Cancelled appointments"
            icon={"/assets/icons/cancelled.svg"}
            count={appointments.cancelledCount}
          />
        </section>

        <DataTable data={appointments.documents} columns={columns} />
      </main>
    </div>
  );
}
