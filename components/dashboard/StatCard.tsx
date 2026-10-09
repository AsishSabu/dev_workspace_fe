import { Card, Statistic } from "antd";

interface StatCardProps {
  title: string;
  value: number;
}

const StatCard = ({ title, value }: StatCardProps) => {
  return (
    <Card>
      <Statistic title={title} value={value} />
    </Card>
  );
};

export default StatCard;
