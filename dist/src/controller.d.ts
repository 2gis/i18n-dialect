import { Descriptor, Scalar } from './types';
import { I18NEntry, TranslationMeta } from 'i18n-proto';
export declare class TranslationController {
    protected translationGetter: (name: string, onReady: (name: string, contents: string) => void) => void;
    protected onFailedSubstitution: (str: string, substitutions: Scalar[]) => void | undefined;
    protected defaultPluralSelect: (factor: number) => number;
    protected dictMeta: TranslationMeta | undefined;
    protected pluralSelect: (factor: number) => number | undefined;
    protected dictionary: {
        [key: string]: string[];
    };
    constructor(translationGetter: (name: string, onReady: (name: string, contents: string) => void) => void, onFailedSubstitution: (str: string, substitutions: Scalar[]) => void | undefined, defaultPluralSelect: (factor: number) => number);
    getString(descriptor: Descriptor, forceUntranslated?: boolean): string;
    setLocale(localeName: string, onReady: (name: string) => void, onError?: (e: any) => void): void;
    protected getDictKeyForDescriptor(descriptor: Descriptor): string | undefined;
    protected getDictKeyForEntry(item: I18NEntry): string | undefined;
    protected getUntranslatedFallback(descriptor: Descriptor): string[];
    protected selectPluralForm(forms: string[], descriptor: Descriptor, forceUntranslated: boolean): string | undefined;
    protected substituteStrings(str: string | undefined, descriptor: Descriptor): string;
    protected makeNewDict(items: I18NEntry[]): {
        [key: string]: string[];
    };
    protected makePluralSelectFunction(selectStr: string): (factor: number) => number;
}
