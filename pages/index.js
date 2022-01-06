import Head from "next/head";

export default function Home() {
	return (
		<div>
			<div className="login-user">
				<div className="login-user__top">
					<div className="login-user__logo" />
					<span className="login-user__title">Who Is Watching?</span>
				</div>

				<div className="login-user__form">
					<div className="login-user__user-box">
						<img src="https://loremfaces.com/#gallery-5" className="login-user__user-img" alt="Picture of the player" />
						<div className="login-user__user-name">Remix</div>
					</div>
				</div>
				<div className="login-user__buttons">
					<button className="login-user__adult">Add Adult</button>
					<button className="login-user__kid">Add Kid</button>
				</div>
			</div>
		</div>
	);
}
