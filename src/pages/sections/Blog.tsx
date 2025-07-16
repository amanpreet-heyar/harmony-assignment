import { Box, Typography, Card, CardContent } from '@mui/material';

const blogPosts = [
  {
    title: 'Why React is Still the Best in 2025',
    excerpt:
      'Explore why React continues to dominate the frontend world and how it’s evolving with the latest ecosystem tools.',
    animation: 'fade-up',
  },
  {
    title: 'Getting Started with TypeScript for Beginners',
    excerpt:
      'TypeScript helps you write better code with fewer bugs. Learn how to get started in just a few steps.',
    animation: 'zoom-in',
  },
  {
    title: 'Top 5 UI Libraries You Should Try',
    excerpt:
      'From MUI to Tailwind, discover the best UI libraries that can speed up your frontend workflow.',
    animation: 'flip-left',
  },
];

const Blog = () => {
  return (
    <Box
      id="blog"
      sx={{
        minHeight: '100vh',
        px: { xs: 3, md: 10 },
        py: { xs: 8, md: 12 },
        backgroundColor: '#f5f5f5',
      }}
    >
      <Typography variant="h3" textAlign="center" gutterBottom>
        Latest Blog Posts
      </Typography>

      {/* Flexbox Layout Instead of Grid */}
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 4,
          mt: 4,
        }}
      >
        {blogPosts.map((post, index) => (
          <Box
            key={index}
            data-aos={post.animation}
            sx={{
              flex: '1 1 300px', // Minimum width 300px and grows responsively
              maxWidth: 360,
            }}
          >
            <Card
              elevation={4}
              sx={{
                height: '100%',
                borderRadius: 4,
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.03)',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
                  cursor: 'pointer',
                },
              }}
            >
              <CardContent>
                <Typography
                  variant="h6"
                  gutterBottom
                  color="primary"
                  sx={{ fontWeight: 600 }}
                >
                  {post.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {post.excerpt}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Blog;
