export function removerCaracteresEspeciais(str: string): string {
	return str.replace(/[^\w\s]/gi, '').replace(/\s/g, '');
}