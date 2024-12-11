import dynamic from 'next/dynamic';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { IconButton } from '@mui/joy';

const JSONPretty = dynamic(() => import('react-json-pretty'), { ssr: false });

const jsonPrettyStyles = {
    padding: '1rem',
    borderRadius: '8px',
    maxHeight: '80vh',
    overflow: 'auto',
    backgroundColor: '#f8f9fa',
    fontSize: '12px',
    '& .json-pretty': {
        lineHeight: '1.3',
        color: '#333',
        backgroundColor: 'transparent',
    },
    '& .json-key': {
        color: '#2f6f9f',
    },
    '& .json-value': {
        color: '#0a7a34',
    },
    '& .json-string': {
        color: '#c41a16',
    },
    '& .json-boolean': {
        color: '#1a01cc',
    },
    '& .json-number': {
        color: '#1a01cc',
    },
};

export default function ShowJSON({ data }) {
    return (
        <div style={{ position: 'relative' }}>
            <JSONPretty 
                data={data}
                style={jsonPrettyStyles}
                mainStyle="padding:1em"
                valueStyle="color:#0a7a34"
                keyStyle="color:#2f6f9f"
                stringStyle="color:#c41a16"
                booleanStyle="color:#1a01cc"
                numberStyle="color:#1a01cc"
            />
            <IconButton
                onClick={() => navigator.clipboard.writeText(JSON.stringify(data, null, 2))}
                variant='plain'
                style={{
                    position: 'absolute',
                    top: '2rem',
                    right: '2rem',
                    // padding: '0.5rem 1rem',
                    background: '#fff',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    // boxShadow: '0 1px 2px rgba(0,0,0,0.1)',
                    transition: 'all 0.2s ease',
                    ':hover': {
                        backgroundColor: '#f8f9fa',
                        borderColor: '#c6c8ca'
                    }
                }}
            >
                <ContentCopyIcon/>
            </IconButton>
        </div>
    );
}
