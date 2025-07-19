import * as Yup from "yup";
import {useAuth} from "../../Context/useAuth";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";

type Props = {};

type LoginFormsInputs = {
  userName: string;
  password: string;
}

const validation = Yup.object().shape({
  userName: Yup.string().required("Username is required"),
  password: Yup.string().required("Password is required"),
})

const LoginPage = (props: Props) => {
  const {loginUser} = useAuth();
  const {register, handleSubmit, formState: {errors}} = useForm<LoginFormsInputs>({resolver: yupResolver(validation)});

  const handleLogin = (form: LoginFormsInputs) => {
    loginUser(form.userName, form.password);
  }
  return <div>LoginPage</div>
};

export default LoginPage;
