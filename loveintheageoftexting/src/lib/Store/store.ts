import {writable} from "svelte/store";
import type {Edge, Node} from "@xyflow/svelte";
import type {ToastModel} from "$lib/Models/ToastModel";

export const nodes = writable<Node[]>([]);
export const edges = writable<Edge[]>([]);

export const toastStore = writable<ToastModel[]>([]);


