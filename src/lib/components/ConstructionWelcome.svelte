<script lang="ts">
	import { getConstructionModelName } from '$lib/utils';
	import { CONSTRUCTION_MODEL_NAMES } from '$lib/constants';

	export let userName: string = '';
	export let selectedModel: string = '';

	// Construction-themed welcome messages
	const welcomeMessages = [
		"🏗️ Ready to build something amazing today?",
		"⚡ Let's power up your project planning!",
		"🔨 Time to hammer out those construction challenges!",
		"🚧 Let's get this project moving forward!",
		"🏭 Industrial strength solutions coming your way!",
		"💪 Union strong - let's get to work!"
	];

	// Get a random welcome message
	$: randomMessage = welcomeMessages[Math.floor(Math.random() * welcomeMessages.length)];
</script>

<div class="construction-welcome bg-gradient-to-br from-union-blue to-union-orange text-white p-8 rounded-2xl shadow-2xl">
	<div class="text-center space-y-6">
		<!-- IUOE Local 825 Logo -->
		<div class="flex justify-center">
			<img
				src="/src/825.png"
				alt="IUOE Local 825 Logo"
				class="w-24 h-24 rounded-full border-4 border-white/20 shadow-lg"
			/>
		</div>

		<!-- Welcome Header -->
		<div class="space-y-2">
			<h1 class="text-4xl font-bold">
				Welcome to Bulldozer™
			</h1>
			<p class="text-xl text-white/90">
				The AI Assistant for IUOE Local 825 Leadership Team
			</p>
		</div>

		<!-- Personalized Greeting -->
		{#if userName}
			<div class="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
				<p class="text-lg font-semibold">
					{randomMessage}
				</p>
				<p class="text-white/80 mt-1">
					Hello, {userName}! I'm here to support your construction, electrical engineering, and collective bargaining needs.
				</p>
			</div>
		{/if}

		<!-- Model Information -->
		{#if selectedModel}
			<div class="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
				<p class="text-sm text-white/70 mb-2">Current AI Model:</p>
				<div class="flex items-center justify-center gap-3">
					<div class="model-badge">
						{getConstructionModelName(selectedModel)}
					</div>
					<span class="text-sm text-white/60">({selectedModel})</span>
				</div>
			</div>
		{/if}

		<!-- Union Pride Section -->
		<div class="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
			<div class="flex items-center justify-center gap-2 text-union-yellow mb-2">
				<span class="text-2xl">🏗️</span>
				<span class="text-lg font-semibold">IUOE Local 825</span>
				<span class="text-2xl">⚡</span>
			</div>
			<p class="text-sm text-white/80 text-center">
				Serving construction and electrical engineering professionals in New Jersey and New York
			</p>
		</div>

		<!-- Quick Actions -->
		<div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
			<div class="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all cursor-pointer">
				<div class="text-2xl mb-2">🏗️</div>
				<h3 class="font-semibold">Construction</h3>
				<p class="text-xs text-white/70">Project planning & safety</p>
			</div>
			<div class="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all cursor-pointer">
				<div class="text-2xl mb-2">⚡</div>
				<h3 class="font-semibold">Electrical</h3>
				<p class="text-xs text-white/70">Engineering & maintenance</p>
			</div>
			<div class="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all cursor-pointer">
				<div class="text-2xl mb-2">🤝</div>
				<h3 class="font-semibold">Union</h3>
				<p class="text-xs text-white/70">Leadership & bargaining</p>
			</div>
		</div>
	</div>
</div>

<style>
	.construction-welcome {
		background: linear-gradient(135deg, var(--union-blue), var(--union-orange));
		position: relative;
		overflow: hidden;
	}

	.construction-welcome::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="white" opacity="0.1"/><circle cx="75" cy="75" r="1" fill="white" opacity="0.1"/><circle cx="50" cy="10" r="0.5" fill="white" opacity="0.1"/><circle cx="10" cy="60" r="0.5" fill="white" opacity="0.1"/><circle cx="90" cy="40" r="0.5" fill="white" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
		opacity: 0.3;
		pointer-events: none;
	}

	.model-badge {
		background: linear-gradient(135deg, var(--union-orange), var(--union-yellow));
		color: white;
		padding: 0.25rem 0.75rem;
		border-radius: 9999px;
		font-size: 0.75rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	}

	/* Hover effects for quick action cards */
	.construction-welcome .grid > div:hover {
		transform: translateY(-2px);
		box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
	}

	/* Responsive design */
	@media (max-width: 768px) {
		.construction-welcome {
			padding: 1.5rem;
		}
		
		.construction-welcome h1 {
			font-size: 2rem;
		}
		
		.construction-welcome .grid {
			grid-template-columns: 1fr;
		}
	}
</style>
