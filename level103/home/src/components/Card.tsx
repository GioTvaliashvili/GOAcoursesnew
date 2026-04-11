type Props = {
  title: string;
  text: string;
  color: string;
};

export default function Card({ title, text, color }: Props) {
  return (
    <div style={{
      backgroundColor: color,
      padding: "20px",
      borderRadius: "10px",
      color: "white",
      width: "250px"
    }}>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}