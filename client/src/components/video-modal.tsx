import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
}

export function VideoModal({ isOpen, onClose, videoUrl }: VideoModalProps) {
  const getYouTubeEmbedUrl = (url: string) => {
    if (!url) return "";
    
    const videoId = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\s]+)/)?.[1];
    if (videoId) {
      return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0`;
    }
    return url;
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-full p-0" data-testid="modal-video" aria-describedby="video-description">
        <DialogHeader className="sr-only">
          <DialogTitle>Course Explainer Video</DialogTitle>
          <p id="video-description" className="sr-only">
            Watch the Nathaniel School of Music Foundation Piano Course explainer video
          </p>
        </DialogHeader>
        
        <div className="aspect-video w-full">
          {isOpen && (
            <iframe
              src={getYouTubeEmbedUrl(videoUrl)}
              title="Course Explainer Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded-lg"
            />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
