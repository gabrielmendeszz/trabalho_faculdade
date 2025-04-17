

const scriptsInEvents = {

	async Start_Event2_Act1(runtime, localVars)
	{
		const bolinha = runtime.objects.personagem.getAllInstance();
		//const linha = runtime.objects.linha.getFirstInstance();
		const linha = runtime.objects.linha.instances();
		if (bolinha.testOverlap(linha)){
			runtime.goToLayout("terror");
		
		}
	}
};

globalThis.C3.JavaScriptInEvents = scriptsInEvents;
