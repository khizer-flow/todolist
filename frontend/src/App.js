import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Box,
  Paper,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Checkbox,
  AppBar,
  Toolbar,
  CssBaseline,
  ThemeProvider,
  createTheme,
  Alert,
  Snackbar
} from '@mui/material';
import {
  Delete as DeleteIcon,
  Add as AddIcon,
  CheckCircle as CheckCircleIcon,
  RadioButtonUnchecked as RadioButtonUncheckedIcon
} from '@mui/icons-material';
import axios from 'axios';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2196f3',
    },
    secondary: {
      main: '#f50057',
    },
  },
});

const API_BASE_URL = 'http://localhost:8080/api/tasks';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      setLoading(true);
      const response = await axios.get(API_BASE_URL);
      setTasks(response.data);
    } catch (error) {
      showSnackbar('Failed to load tasks', 'error');
    } finally {
      setLoading(false);
    }
  };

  const addTask = async () => {
    if (!newTask.trim()) return;
    
    try {
      const response = await axios.post(API_BASE_URL, {
        title: newTask.trim(),
        completed: false
      });
      setTasks([...tasks, response.data]);
      setNewTask('');
      showSnackbar('Task added successfully!', 'success');
    } catch (error) {
      showSnackbar('Failed to add task', 'error');
    }
  };

  const toggleTask = async (id, completed) => {
    try {
      const taskToUpdate = tasks.find(task => task.id === id);
      const response = await axios.put(`${API_BASE_URL}/${id}`, {
        ...taskToUpdate,
        completed: !completed
      });
      setTasks(tasks.map(task => task.id === id ? response.data : task));
      showSnackbar('Task updated!', 'success');
    } catch (error) {
      showSnackbar('Failed to update task', 'error');
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`${API_BASE_URL}/${id}`);
      setTasks(tasks.filter(task => task.id !== id));
      showSnackbar('Task deleted!', 'success');
    } catch (error) {
      showSnackbar('Failed to delete task', 'error');
    }
  };

  const showSnackbar = (message, severity) => {
    setSnackbar({ open: true, message, severity });
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      addTask();
    }
  };

  const completedTasks = tasks.filter(task => task.completed).length;
  const totalTasks = tasks.length;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static" elevation={0}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            ✨ Todo List
          </Typography>
          <Typography variant="body2">
            {completedTasks} of {totalTasks} completed
          </Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
          <Typography variant="h4" component="h1" gutterBottom align="center" sx={{ mb: 4, color: 'primary.main' }}>
            What needs to be done?
          </Typography>

          <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Add a new task..."
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              onKeyPress={handleKeyPress}
              sx={{ flexGrow: 1 }}
            />
            <Button
              variant="contained"
              onClick={addTask}
              disabled={!newTask.trim()}
              startIcon={<AddIcon />}
              sx={{ px: 3 }}
            >
              Add
            </Button>
          </Box>

          <List sx={{ width: '100%' }}>
            {tasks.map((task) => (
              <ListItem
                key={task.id}
                sx={{
                  mb: 1,
                  border: 1,
                  borderColor: 'grey.200',
                  borderRadius: 1,
                  backgroundColor: task.completed ? 'grey.50' : 'white',
                  '&:hover': {
                    backgroundColor: task.completed ? 'grey.100' : 'grey.50',
                  }
                }}
              >
                <Checkbox
                  checked={task.completed}
                  onChange={() => toggleTask(task.id, task.completed)}
                  icon={<RadioButtonUncheckedIcon />}
                  checkedIcon={<CheckCircleIcon color="primary" />}
                />
                <ListItemText
                  primary={task.title}
                  sx={{
                    textDecoration: task.completed ? 'line-through' : 'none',
                    color: task.completed ? 'text.secondary' : 'text.primary',
                  }}
                />
                <ListItemSecondaryAction>
                  <IconButton
                    edge="end"
                    onClick={() => deleteTask(task.id)}
                    color="error"
                    sx={{ '&:hover': { backgroundColor: 'error.light' } }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>

          {tasks.length === 0 && !loading && (
            <Box sx={{ textAlign: 'center', py: 4 }}>
              <Typography variant="body1" color="text.secondary">
                No tasks yet. Add one above to get started!
              </Typography>
            </Box>
          )}
        </Paper>
      </Container>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} sx={{ width: '100%' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </ThemeProvider>
  );
}

export default App;
