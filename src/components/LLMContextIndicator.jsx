import claudeLogo from '../assets/logos/claude-ai.png'
import openaiLogo from '../assets/logos/ChatGPT_logo.png'
import geminiLogo from '../assets/logos/google-gemini.png'
import deepseekLogo from '../assets/logos/deepseek.png'
import xaiLogo from '../assets/logos/xai.jpg'

const LLMContextIndicator = ({ wordCount }) => {
  const models = [
    {
      name: 'Gemini 2.5 Pro',
      logo: geminiLogo,
      contextWindow: 750000,
      company: 'Google'
    },
    {
      name: 'Gemini 2.5 Flash',
      logo: geminiLogo,
      contextWindow: 750000,
      company: 'Google'
    },
    {
      name: 'GPT-5',
      logo: openaiLogo,
      contextWindow: 300000,
      company: 'OpenAI'
    },
    {
      name: 'Claude Sonnet 4.5',
      logo: claudeLogo,
      contextWindow: 150000,
      company: 'Anthropic'
    },
    {
      name: 'Claude Haiku 4.5',
      logo: claudeLogo,
      contextWindow: 150000,
      company: 'Anthropic'
    },
    {
      name: 'DeepSeek-R1',
      logo: deepseekLogo,
      contextWindow: 123000,
      company: 'DeepSeek'
    },
    {
      name: 'GPT-5 Mini',
      logo: openaiLogo,
      contextWindow: 96000,
      company: 'OpenAI'
    },
    {
      name: 'DeepSeek V3',
      logo: deepseekLogo,
      contextWindow: 96000,
      company: 'DeepSeek'
    },
    {
      name: 'Grok-3',
      logo: xaiLogo,
      contextWindow: 96000,
      company: 'xAI'
    }
  ]

  return (
    <div className="mt-8 mb-6">
      <div className="text-center mb-4">
        <h2 className="text-xl font-semibold text-foreground mb-1">LLM Context Window Indicators</h2>
        <p className="text-sm text-muted-foreground">
          Icons light up when your text exceeds each model's context window
        </p>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
        {models.map((model, index) => {
          const isExceeded = wordCount > model.contextWindow

          return (
            <div
              key={index}
              className={`flex flex-col items-center p-3 rounded-lg border-2 transition-all duration-300 ${
                isExceeded
                  ? 'border-red-500 bg-red-500/10 shadow-lg shadow-red-500/20'
                  : 'border-border bg-card/50'
              }`}
            >
              <div
                className={`w-12 h-12 mb-2 rounded-lg overflow-hidden transition-all duration-300 ${
                  isExceeded ? 'opacity-100 scale-110' : 'opacity-40 grayscale'
                }`}
              >
                <img
                  src={model.logo}
                  alt={`${model.name} logo`}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-center">
                <div className={`text-xs font-medium transition-colors duration-300 ${
                  isExceeded ? 'text-red-400' : 'text-muted-foreground'
                }`}>
                  {model.name}
                </div>
                <div className={`text-[10px] transition-colors duration-300 ${
                  isExceeded ? 'text-red-300' : 'text-muted-foreground/70'
                }`}>
                  {model.contextWindow.toLocaleString()} words
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {wordCount > 0 && (
        <div className="mt-4 text-center text-sm">
          <span className="text-muted-foreground">
            Models exceeded:
          </span>
          <span className={`ml-2 font-semibold ${
            models.filter(m => wordCount > m.contextWindow).length > 0
              ? 'text-red-400'
              : 'text-green-400'
          }`}>
            {models.filter(m => wordCount > m.contextWindow).length} / {models.length}
          </span>
        </div>
      )}
    </div>
  )
}

export default LLMContextIndicator
