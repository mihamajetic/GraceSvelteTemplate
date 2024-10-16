<script>
	import Rastlina from './rastlina.svelte';
</script>

<div class="container px-10 mx-auto my-10">
	<div class="mb-10">
		<h1 class="font-medium text-3xl">Predstavitev rastlin</h1>
		<p>
			Rastlíne (znanstveno ime Plantae) so eno izmed kraljestev živih bitij, v katerega uvrščamo
			približno 300.000 danes znanih vrst. Skupina vključuje splošno razširjene in poznane
			življenjske oblike, kot so drevesa, cvetnice, trave, praprotnice in mahovi, izključuje pa
			rdeče in rjave alge, živali, glive, arheje ter bakterije. Za rastline je značilno, da razen
			izjem pridobivajo energijo za rast in delovanje organizma iz sončne svetlobe s pomočjo procesa
			fotosinteze, ki poteka v kloroplastih, poleg tega imajo njihove celice celične stene, grajene
			iz celuloze.
		</p>
	</div>
	<div class="grid grid-cols-3 gap-5">
		<Rastlina
			name="Jabolko"
			image="jabolko.jpg"
			description="Jabolko [jábou̯ko] je sadež, ki raste na drevesu jablani. Spada med kulturne rastline, ki jih je vzgojil človek s pomočjo križanja. Korenine jabolka izvirajo iz Azije. V Evropo je verjetno prispelo s trgovci. Obstaja več kot 7500 kultivarjev jabolk. Jabolko zraste iz pet-listnega cveta."
		></Rastlina>
		<Rastlina
			name="Hruška"
			image="hruska.jpg"
			description="Hruška (znanstveno ime Pyrus communis) je do 16 m visoko drevo s pokončnimi vejami. Deblo doseže do 60 cm premera, lubje ima sivkasto-rjave barve, skorja je razpokana, številne vejice - mladike imajo na koncu trnate zaključke. Listi so zgoraj gladki, temnozeleni, spodaj pa bledi, fino dlakavi. Hruška spada v skupino pečkatih sadežev."
		></Rastlina>
		<Rastlina
			name="Hrast"
			image="hrast.jpg"
			description="Hrasti imajo spiralno urejeno listje, ki je pri številnih vrstah pernato krpasto. Nekateri imajo liste nažagane ali pa z gladkim robom. Cvetove, ki se razvijejo spomladi, imenujemo mačice. Plod, ki ga imenujemo želod, je orešek in zraste v čašasti strukturi, imenovani kapica. Vsak želod vsebuje eno seme (le redko dve ali tri) in zori od šest do osemnajst mesecev, odvisno od vrste."
		></Rastlina>
	</div>
</div>
