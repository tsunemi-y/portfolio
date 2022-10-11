import type { NextPage } from 'next'
import { useForm, SubmitHandler } from "react-hook-form"
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Link,
  Paper,
  Stack,
  TextField,
  Typography
} from "@mui/material"
import LockOutlinedIcon from "@mui/icons-material/LockOutlined"
import { teal } from "@mui/material/colors"
import useLogin from '../../services/authentications/useLogin'

type Inputs = {
  email: string,
  password: string,
};


const LoginPage: NextPage = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = data => {
    useLogin(data)
  }

  return (
    <Grid>

      <Paper
        elevation={3}
        sx={{
          p: 4,
          height: "70vh",
          width: "380px",
          m: "20px auto"
        }}
      >

      <Grid
        container
        direction="column"
        justifyContent="flex-start" //多分、デフォルトflex-startなので省略できる。
        alignItems="center"
      >
        <Avatar sx={{ bgcolor: teal[400] }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant={"h5"} sx={{ m: "30px" }}>
          ログイン
        </Typography>
      </Grid>

      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField 
          label="Email" 
          variant="standard" 
          fullWidth  
          {...register("email", { required: true })}
        />

        <TextField
          type="password"
          label="Password"
          variant="standard"
          fullWidth
          {...register("password", { required: true })}
        />

        {/* ラベルとチェックボックス */}
        <FormControlLabel
          labelPlacement="end"
          label="パスワードを忘れました"
          control={<Checkbox name="checkboxA" size="small" color="primary" />}
        />

        <Box mt={3}>
          <Button type="submit" color="primary" variant="contained" fullWidth>
            ログインする
          </Button>

          <Typography variant="caption">
            <Link href="#">パスワードを忘れましたか？</Link>
          </Typography>
          <Typography variant="caption" display="block">
            アカウントを持っていますか？
            <Link href="#">アカウントを作成</Link>
          </Typography>
        </Box>
      </form>

    </Paper>
  </Grid>
  )
}

export default LoginPage