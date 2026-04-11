import Card from "./components/Card";

export default function App() {
  return (
    <div style={{
      display: "flex",
      gap: "20px",
      justifyContent: "center",
      marginTop: "50px"
    }}>
      <Card title="Sedans" text="City driving" color="orange" />
      <Card title="SUVs" text="Family trips" color="teal" />
      <Card title="Luxury" text="Comfort" color="darkblue" />
    </div>
  );
}

// import DashboardCard from "./components/Dashboad";

// export default function App() {
//   const data = [
//     { title: "Work", hours: 32, lastWeek: 36, color: "red" },
//     { title: "Play", hours: 10, lastWeek: 8, color: "blue" },
//     { title: "Study", hours: 4, lastWeek: 7, color: "purple" }
//   ];

//   return (
//     <div style={{
//       display: "grid",
//       gridTemplateColumns: "repeat(3, 1fr)",
//       gap: "20px",
//       padding: "40px"
//     }}>
//       {data.map((item, i) => (
//         <DashboardCard
//           key={i}
//           title={item.title}
//           hours={item.hours}
//           lastWeek={item.lastWeek}
//           color={item.color}
//         />
//       ))}
//     </div>
//   );
// }
