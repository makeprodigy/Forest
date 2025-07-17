import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
    
    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error caught by boundary:', error, errorInfo);
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-error-50 via-white to-warning-50 flex items-center justify-center p-4">
          <div className="max-w-2xl mx-auto text-center">
            {/* Error Icon */}
            <div className="mb-8">
              <div className="w-24 h-24 bg-error-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">⚠️</span>
              </div>
              <h1 className="text-3xl font-bold text-error-700 mb-2">
                Oops! Something went wrong
              </h1>
              <p className="text-neutral-600 text-lg">
                We're sorry, but something unexpected happened. Our team has been notified.
              </p>
            </div>

            {/* Error Details (Development Only) */}
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <div className="mb-8 text-left">
                <details className="bg-neutral-100 rounded-lg p-4">
                  <summary className="cursor-pointer font-medium text-neutral-700 mb-2">
                    Error Details (Development)
                  </summary>
                  <div className="bg-neutral-900 text-neutral-100 p-4 rounded text-sm overflow-auto max-h-64">
                    <pre>{this.state.error && this.state.error.toString()}</pre>
                    <pre className="mt-4">{this.state.errorInfo.componentStack}</pre>
                  </div>
                </details>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.location.reload()}
                className="btn btn-primary"
              >
                <span className="mr-2">🔄</span>
                Reload Page
              </button>
              
              <button
                onClick={() => window.location.href = '/'}
                className="btn btn-secondary"
              >
                <span className="mr-2">🏠</span>
                Go Home
              </button>
              
              <button
                onClick={() => this.setState({ hasError: false, error: null, errorInfo: null })}
                className="btn btn-ghost"
              >
                <span className="mr-2">🔄</span>
                Try Again
              </button>
            </div>

            {/* Help Section */}
            <div className="mt-12 p-6 bg-white rounded-2xl shadow-soft">
              <h3 className="text-lg font-semibold text-neutral-800 mb-4">
                Need Help?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="text-left">
                  <h4 className="font-medium text-neutral-700 mb-2">Contact Support</h4>
                  <p className="text-neutral-600 mb-2">
                    Our support team is here to help you resolve any issues.
                  </p>
                  <a 
                    href="mailto:support@forest.com" 
                    className="text-primary-600 hover:text-primary-700 font-medium"
                  >
                    support@forest.com
                  </a>
                </div>
                <div className="text-left">
                  <h4 className="font-medium text-neutral-700 mb-2">Check Status</h4>
                  <p className="text-neutral-600 mb-2">
                    Check if there are any ongoing service issues.
                  </p>
                  <a 
                    href="/status" 
                    className="text-primary-600 hover:text-primary-700 font-medium"
                  >
                    Service Status
                  </a>
                </div>
              </div>
            </div>

            {/* Error ID for tracking */}
            <div className="mt-6 text-xs text-neutral-500">
              Error ID: {Date.now().toString(36)}-{Math.random().toString(36).substr(2, 9)}
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary; 