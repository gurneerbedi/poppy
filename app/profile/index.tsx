import { Screen, Subtitle, Title } from "@/components/ui";
import { useAuth } from "@/contexts/AuthContext";

export default function Profile() {
  const { user } = useAuth();
  return (
    <Screen>
      <Title>Profile Page</Title>
      <Subtitle>Hi {user!.email}</Subtitle>
    </Screen>
  );
}
