import { browser, dev } from '$app/environment';
// import { version } from '../../package.json';

export const APP_NAME = 'Bulldozer™';

// Construction-themed model display names for IUOE Local 825
export const CONSTRUCTION_MODEL_NAMES = {
	// OpenAI Models
	'gpt-4o': '🏗️ Master Builder',
	'gpt-4o-mini': '🔨 Site Foreman',
	'gpt-4-turbo': '🚧 Project Manager',
	'gpt-4': '🏢 Construction Chief',
	'gpt-3.5-turbo': '👷 Safety Inspector',
	
	// Claude Models
	'claude-3-5-sonnet': '⚡ Power Grid Specialist',
	'claude-3-5-haiku': '🔌 Electrical Engineer',
	'claude-3-opus': '🏭 Industrial Master',
	'claude-3-sonnet': '🏗️ Structural Expert',
	'claude-3-haiku': '⚙️ Systems Technician',
	
	// Ollama Models
	'llama3.2': '🚛 Heavy Equipment Operator',
	'llama3.1': '🏗️ Foundation Specialist',
	'llama3': '🔨 General Contractor',
	'codellama': '💻 Digital Foreman',
	'mistral': '🌫️ Site Surveyor',
	'gemma': '💎 Quality Control',
	
	// Default fallback
	'default': '🏗️ Union Worker'
};

export const WEBUI_HOSTNAME = browser ? (dev ? `${location.hostname}:8080` : ``) : '';
export const WEBUI_BASE_URL = browser ? (dev ? `http://${WEBUI_HOSTNAME}` : ``) : ``;
export const WEBUI_API_BASE_URL = `${WEBUI_BASE_URL}/api/v1`;

export const OLLAMA_API_BASE_URL = `${WEBUI_BASE_URL}/ollama`;
export const OPENAI_API_BASE_URL = `${WEBUI_BASE_URL}/openai`;
export const AUDIO_API_BASE_URL = `${WEBUI_BASE_URL}/api/v1/audio`;
export const IMAGES_API_BASE_URL = `${WEBUI_BASE_URL}/api/v1/images`;
export const RETRIEVAL_API_BASE_URL = `${WEBUI_BASE_URL}/api/v1/retrieval`;

export const WEBUI_VERSION = APP_VERSION;
export const WEBUI_BUILD_HASH = APP_BUILD_HASH;
export const REQUIRED_OLLAMA_VERSION = '0.1.16';

export const SUPPORTED_FILE_TYPE = [
	'application/epub+zip',
	'application/pdf',
	'text/plain',
	'text/csv',
	'text/xml',
	'text/html',
	'text/x-python',
	'text/css',
	'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
	'application/octet-stream',
	'application/x-javascript',
	'text/markdown',
	'audio/mpeg',
	'audio/wav',
	'audio/ogg',
	'audio/x-m4a'
];

export const SUPPORTED_FILE_EXTENSIONS = [
	'md',
	'rst',
	'go',
	'py',
	'java',
	'sh',
	'bat',
	'ps1',
	'cmd',
	'js',
	'ts',
	'css',
	'cpp',
	'hpp',
	'h',
	'c',
	'cs',
	'htm',
	'html',
	'sql',
	'log',
	'ini',
	'pl',
	'pm',
	'r',
	'dart',
	'dockerfile',
	'env',
	'php',
	'hs',
	'hsc',
	'lua',
	'nginxconf',
	'conf',
	'm',
	'mm',
	'plsql',
	'perl',
	'rb',
	'rs',
	'db2',
	'scala',
	'bash',
	'swift',
	'vue',
	'svelte',
	'doc',
	'docx',
	'pdf',
	'csv',
	'txt',
	'xls',
	'xlsx',
	'pptx',
	'ppt',
	'msg'
];

export const PASTED_TEXT_CHARACTER_LIMIT = 1000;

// Source: https://kit.svelte.dev/docs/modules#$env-static-public
// This feature, akin to $env/static/private, exclusively incorporates environment variables
// that are prefixed with config.kit.env.publicPrefix (usually set to PUBLIC_).
// Consequently, these variables can be securely exposed to client-side code.
