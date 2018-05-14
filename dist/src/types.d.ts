export { SimpleTranslation, ContextualTranslation, PluralTranslation, PluralContextualTranslation, Scalar } from 'i18n-stex/src/types';
import { Scalar } from 'i18n-stex/src/types';
export declare type SingleSimpleDescriptor = {
    type: '_t';
    msgid: string;
    msgstr: string;
    substitutions: Scalar[];
};
export declare type SingleContextualDescriptor = {
    type: '_pt';
    msgid: string;
    msgstr: string;
    msgctxt: string;
    substitutions: Scalar[];
};
export declare type PluralSimpleDescriptor = {
    type: '_nt';
    factor: number;
    msgid: string;
    msgidPlural: string;
    allPlurals: string[];
    msgstr: string[];
    substitutions: Scalar[];
};
export declare type PluralContextualDescriptor = {
    type: '_npt';
    factor: number;
    msgid: string;
    msgidPlural: string;
    allPlurals: string[];
    msgstr: string[];
    msgctxt: string;
    substitutions: Scalar[];
};
export declare type SingleDescriptor = SingleSimpleDescriptor | SingleContextualDescriptor;
export declare type PluralDescriptor = PluralSimpleDescriptor | PluralContextualDescriptor;
export declare type Descriptor = SingleDescriptor | PluralDescriptor;
