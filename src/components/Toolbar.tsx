import { FaFileUpload, FaSave, FaCloudUploadAlt, FaCloudDownloadAlt } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Separator } from '@/components/ui/separator';

interface ToolbarProps {
  onLoadFile: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSaveFile: () => void;
  onSaveToApi: () => void;
  onLoadFromApi: () => void;
  isLoading: boolean;
}

export function Toolbar({ onLoadFile, onSaveFile, onSaveToApi, onLoadFromApi, isLoading }: ToolbarProps) {
  return (

    <TooltipProvider delayDuration={100}>
      <header className="flex items-center justify-between h-14 px-4 border-b bg-background">
        {/* Left Side: Title */}
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6 mr-2"
          >
            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
            <line x1="10" y1="9" x2="8" y2="9" />
          </svg>
          <h1 className="text-xl font-bold tracking-tight">Markdown Previewer</h1>
        </div>

        {/* Right Side: Action Buttons */}
        <div className="flex items-center gap-2">
          {/* Local File Actions */}
          <Tooltip>
            <TooltipTrigger asChild>
              <label htmlFor="file-upload">
                <Button variant="ghost" size="icon" disabled={isLoading} className="cursor-pointer">
                  <FaFileUpload className="h-4 w-4" />
                </Button>
                <input
                  id="file-upload"
                  type="file"
                  accept=".md,.txt"
                  className="hidden"
                  onChange={onLoadFile}
                  disabled={isLoading}
                />
              </label>
            </TooltipTrigger>
            <TooltipContent>
              <p>Upload from device (.md)</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" onClick={onSaveFile} disabled={isLoading}>
                <FaSave className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Save to Computer (.md)</p>
            </TooltipContent>
          </Tooltip>

          <Separator orientation="vertical" className="h-6 mx-2" />

          {/* Cloud Actions */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" onClick={onSaveToApi} disabled={isLoading}>
                <FaCloudUploadAlt className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Save to Cloud</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" onClick={onLoadFromApi} disabled={isLoading}>
                <FaCloudDownloadAlt className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Load from Cloud</p>
            </TooltipContent>
          </Tooltip>
          {isLoading && <span className="text-sm animate-pulse">Processing...</span>}
        </div>
      </header>
    </TooltipProvider>
  );
}


