import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function CadastroUsuarioCard({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Card className="m-5">
      <CardHeader>
        <CardTitle>Criar uma nova conta</CardTitle>
      </CardHeader>
      <CardContent>
        {children}
      </CardContent>
    </Card>
  )
}