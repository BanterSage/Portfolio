import "@mantine/core/styles.css";
import "../assets/styles/global.scss";
import { Container, MantineProvider } from "@mantine/core";
import { ReactNode } from "react";
import { Navigation } from "../components/Navigation";
import { ModalsProvider } from "@mantine/modals";

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<MantineProvider
			forceColorScheme="dark"
		>
			<ModalsProvider>
				<Navigation />
					<Container size="xl" strategy="grid" my={100} px={{ base: "md", md: 0 }}>
						{children}
					</Container>
			</ModalsProvider>
		</MantineProvider>
	);
}
