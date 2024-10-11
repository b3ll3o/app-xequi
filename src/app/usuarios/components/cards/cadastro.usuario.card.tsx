import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export type CadastroUsuarioCardProps = {
  children: React.ReactNode
  titulo: string
}

export function CadastroUsuarioCard({
  children, titulo
}: CadastroUsuarioCardProps) {
  return (
    <Card className="m-5">
      <CardHeader>
        <CardTitle>{titulo}</CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
}
