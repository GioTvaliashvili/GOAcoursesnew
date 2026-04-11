type Props = {
  title: string;
  hours: number;
  lastWeek: number;
  color: string;
};

export default function DashboardCard({ title, hours, lastWeek, color }: Props) {
  return (
    <div style={{
      backgroundColor: color,
      padding: "20px",
      borderRadius: "10px",
      color: "white"
    }}>
      <h3>{title}</h3>
      <h1>{hours}hrs</h1>
      <p>Last week: {lastWeek}hrs</p>
    </div>
  );
}