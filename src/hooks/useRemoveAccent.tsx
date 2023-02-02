export const useRemoveAccent = (text: string | undefined) => {
	const res = text?.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
	return res?.toLowerCase();
};
