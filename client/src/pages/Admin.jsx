import React, { useState } from 'react';
import axios from 'axios';
import { Upload, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

const Admin = () => {
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [message, setMessage] = useState('');

  const handleFileUpload = async (e) => {
    e.preventDefault();
    if (!file) return;

    setStatus('loading');
    const formData = new FormData();
    formData.append('resume', file);

    try {
      const res = await axios.post('http://localhost:5000/api/resume/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setStatus('success');
      setMessage(res.data.message);
    } catch (err) {
      setStatus('error');
      setMessage(err.response?.data?.message || 'Error uploading resume');
    }
  };

  return (
    <div className="min-h-screen bg-background section-padding flex items-center justify-center">
      <div className="glass-card p-10 max-w-xl w-full">
        <h1 className="text-3xl font-bold mb-8 text-gradient">Admin Dashboard</h1>
        
        <div className="space-y-6">
          <div className="p-6 border-2 border-dashed border-white/10 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Upload size={20} /> Upload Resume (PDF)
            </h3>
            <p className="text-text-muted text-sm mb-6">
              Upload your latest resume to automatically populate your portfolio content.
            </p>
            
            <form onSubmit={handleFileUpload} className="space-y-4">
              <input 
                type="file" 
                accept=".pdf"
                onChange={(e) => setFile(e.target.files[0])}
                className="w-full text-sm text-text-muted file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-white hover:file:bg-primary-dark"
              />
              
              <button 
                type="submit"
                disabled={status === 'loading' || !file}
                className="w-full py-3 bg-premium-gradient text-white font-bold rounded-xl flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {status === 'loading' ? (
                  <Loader2 className="animate-spin" />
                ) : (
                  'Process Resume'
                )}
              </button>
            </form>
          </div>

          {status === 'success' && (
            <div className="p-4 bg-green-500/20 border border-green-500/50 rounded-xl flex items-center gap-3 text-green-400">
              <CheckCircle size={20} />
              <p className="text-sm">{message}</p>
            </div>
          )}

          {status === 'error' && (
            <div className="p-4 bg-red-500/20 border border-red-500/50 rounded-xl flex items-center gap-3 text-red-400">
              <AlertCircle size={20} />
              <p className="text-sm">{message}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Admin;
