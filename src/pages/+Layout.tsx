import "@mantine/core/styles.css";
import "../assets/styles/global.scss";
import { MantineProvider } from "@mantine/core";
import { ReactNode } from "react";
import { Navigation } from "../components/Navigation";
import { ModalsProvider } from "@mantine/modals";

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<MantineProvider defaultColorScheme="auto">
			<ModalsProvider>
				<Navigation />
				{children}
			</ModalsProvider>
		</MantineProvider>
	);
}
