import { DarkTheme } from "./darkschema";
import { LightTheme } from "./lightschema";

export type AppTheme = typeof DarkTheme | typeof LightTheme;
