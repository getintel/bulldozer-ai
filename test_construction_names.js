// Test file for construction model names
// This can be run in the browser console to test the construction theme

// Mock the constants and utility function
const CONSTRUCTION_MODEL_NAMES = {
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

function getConstructionModelName(modelName) {
	if (!modelName) return CONSTRUCTION_MODEL_NAMES.default;
	
	// Try exact match first
	if (CONSTRUCTION_MODEL_NAMES[modelName]) {
		return CONSTRUCTION_MODEL_NAMES[modelName];
	}
	
	// Try partial matches for variations
	for (const [key, value] of Object.entries(CONSTRUCTION_MODEL_NAMES)) {
		if (key !== 'default' && modelName.toLowerCase().includes(key.toLowerCase())) {
			return value;
		}
	}
	
	// Return original name if no construction theme found
	return modelName;
}

// Test the function
console.log('🏗️ Testing Construction Model Names 🏗️');
console.log('=====================================');

const testModels = [
	'gpt-4o',
	'gpt-4o-mini',
	'claude-3-5-sonnet',
	'llama3.2',
	'unknown-model',
	'gpt-4-turbo-preview'
];

testModels.forEach(model => {
	const constructionName = getConstructionModelName(model);
	console.log(`${model} → ${constructionName}`);
});

console.log('\n🎯 All tests completed!');
console.log('The construction theme is working correctly if you see emojis and construction-themed names above.');
