
import { Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import styles from './ButtonStyles'
const Button = ({ text, onPress, loading }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress} disabled={loading}>
            {loading ? (
                <ActivityIndicator color='white' />
            ) : (
                <Text style={styles.title}>{text}</Text>
            )}
        </TouchableOpacity>
    )
}

export default Button;