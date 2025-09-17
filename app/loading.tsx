export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
          <div className="w-8 h-8 bg-white rounded-full" />
        </div>
        <div className="space-y-2">
          <div className="h-4 bg-gray-200 rounded w-32 mx-auto animate-pulse" />
          <div className="h-3 bg-gray-200 rounded w-24 mx-auto animate-pulse" />
        </div>
      </div>
    </div>
  );
}
