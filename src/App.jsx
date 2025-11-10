import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import LLMContextIndicator from './components/LLMContextIndicator.jsx'
import './App.css'

function App() {
  const [text, setText] = useState('')
  const [stats, setStats] = useState({
    words: 0,
    characters: 0,
    sentences: 0
  })

  // Real-time counting whenever text changes
  useEffect(() => {
    if (!text.trim()) {
      setStats({ words: 0, characters: 0, sentences: 0 })
      return
    }

    // Count words (split by whitespace and filter out empty strings)
    const words = text.trim().split(/\s+/).filter(word => word.length > 0).length

    // Count characters (including spaces)
    const characters = text.length

    // Count sentences (split by sentence endings and filter out empty strings)
    const sentences = text.split(/[.!?]+/).filter(sentence => sentence.trim().length > 0).length

    setStats({ words, characters, sentences })
  }, [text])

  const clearText = () => {
    setText('')
    setStats({ words: 0, characters: 0, sentences: 0 })
  }

  return (
    <div className="word-counter-container">
      <div className="word-counter-card">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Word Counter</h1>
          <p className="text-muted-foreground">
            Analyze words, characters, and sentences. LLM indicators show which models can handle your text.
          </p>
        </div>

        <div className="space-y-6">
          <div>
            <label htmlFor="text-input" className="block text-sm font-medium text-foreground mb-2">
              Enter your text:
            </label>
            <textarea
              id="text-input"
              className="word-counter-textarea"
              placeholder="Paste or type your text here..."
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>

          <div className="flex gap-4 justify-center">
            <Button
              onClick={clearText}
              variant="outline"
              className="border-border hover:bg-secondary px-8 py-2"
            >
              Clear
            </Button>
          </div>

          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">{stats.words.toLocaleString()}</div>
              <div className="stat-label">Words</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">{stats.characters.toLocaleString()}</div>
              <div className="stat-label">Characters</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">{stats.sentences.toLocaleString()}</div>
              <div className="stat-label">Sentences</div>
            </div>
          </div>

          {/* LLM Context Window Indicators */}
          <LLMContextIndicator wordCount={stats.words} />

          {text && (
            <div className="mt-6 p-4 bg-muted rounded-lg">
              <h3 className="text-sm font-medium text-foreground mb-2">Quick Stats:</h3>
              <div className="text-sm text-muted-foreground space-y-1">
                <div>Average words per sentence: {stats.sentences > 0 ? (stats.words / stats.sentences).toFixed(1) : '0'}</div>
                <div>Average characters per word: {stats.words > 0 ? (stats.characters / stats.words).toFixed(1) : '0'}</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default App
