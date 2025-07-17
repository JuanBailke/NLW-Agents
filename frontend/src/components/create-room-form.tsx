import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod/v4";
import { useCreateRoom } from "@/http/use-create-room";
import { Button } from "./ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "./ui/card";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const createRoomSchema = z.object({
	name: z.string().min(3, { message: "O nome é obrigatório" }),
	description: z.string(),
});

type CreateRoomFormData = z.infer<typeof createRoomSchema>;

export function CreateRoomForm() {
	const { mutateAsync: createRoom } = useCreateRoom();

	const CreateRoomForm = useForm<CreateRoomFormData>({
		resolver: zodResolver(createRoomSchema),
		defaultValues: {
			name: "",
			description: "",
		},
	});

	async function handleCreateRoom({ name, description }: CreateRoomFormData) {
		await createRoom({ name, description });
		CreateRoomForm.reset();
	}

	return (
		<Card>
			<CardHeader>
				<CardTitle>Criar sala</CardTitle>
				<CardDescription>
					Crie uma nova sala para começar a fazer perguntas e receber respostas
					da IA
				</CardDescription>
			</CardHeader>
			<CardContent>
				<Form {...CreateRoomForm}>
					<form
						onSubmit={CreateRoomForm.handleSubmit(handleCreateRoom)}
						className="flex flex-col gap-4"
					>
						<FormField
							control={CreateRoomForm.control}
							name="name"
							render={({ field }) => {
								return (
									<FormItem>
										<FormLabel>Nome da sala</FormLabel>
										<FormControl>
											<Input {...field} placeholder="Digite o nome da sala" />
										</FormControl>
										<FormMessage />
									</FormItem>
								);
							}}
						/>
						<FormField
							control={CreateRoomForm.control}
							name="description"
							render={({ field }) => {
								return (
									<FormItem>
										<FormLabel>Descrição</FormLabel>
										<FormControl>
											<Textarea {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								);
							}}
						/>

						<Button type="submit" className="w-full">
							Criar sala
						</Button>
					</form>
				</Form>
			</CardContent>
		</Card>
	);
}
