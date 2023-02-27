<template>
	<header class="logotype flex flex-row">
		<!-- <img alt="logo" class="logo" src="@/img/logo.svg" /> -->
		<h1>
			<span class="title type-display"> Ironsworn:</span>
			<span class="title title-main type-display">Starforged</span>
			<span class="subtitle type-compact">System Resource Document</span>
		</h1>
	</header>
</template>

<style lang="pcss">
.logotype {
  /* padding: var(--size-2); */
  text-align: center;
}
.logotype h1 {
  font-size: var(--font-size-4);
}
.logotype span {
  display: block;
}

.logotype .title-main {
  font-size: var(--font-size-5);
}
.logotype .subtitle {
    font-size: var(--font-size-3);
    font-weight: normal;
    text-transform: none;
  }
</style>
