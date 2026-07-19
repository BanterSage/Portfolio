import { Container, Group, Paper, UnstyledButton } from "@mantine/core";
import classes from "./style.module.scss";
import { navigate } from "vike/client/router";

export function Navigation() {
	return (
		<Container
			mt="xs"
			size="xl"
			strategy="grid"
			pos="sticky"
			component="nav"
			left={0}
			right={0}
			top={0}
			bottom={0}
			px={{ base: "sm", xl: 0 }}
			style={{
				zIndex: 1000,
			}}
		>
			<Paper
				p="lg"
				radius={100}
				style={{
					background: "rgba(0, 0, 0, 0.5)",
					backdropFilter: "blur(12px)"
				}}
			>
				<Group align="center" justify="center">
					<UnstyledButton
						className={classes.link}
						onClick={() => navigate("/")}
					>
						Home
					</UnstyledButton>
					<UnstyledButton
						className={classes.link}
						onClick={() => navigate("/all year")}
					>
						All Year
					</UnstyledButton>
					<UnstyledButton
						className={classes.link}
						onClick={() => navigate("/summer")}
					>
						Spring/Summer
					</UnstyledButton>
					<UnstyledButton
						className={classes.link}
						onClick={() => navigate("/fall")}
					>
						Fall
					</UnstyledButton>
					<UnstyledButton
						className={classes.link}
						onClick={() => navigate("/winter")}
					>
						Winter
					</UnstyledButton>
				</Group>
			</Paper>
		</Container>
	)
}