import { connect } from 'react-redux'
import userActions from 'actions/user'
import HeaderAccount from 'components/Header/Account/index'
import styles from './index.scss'

const mapStateToProps = (state) => ({
  user: state.user
})

export class Header extends React.Component {
  static propTypes = {
    user: React.PropTypes.object.isRequired,
    userFirebase: React.PropTypes.object,
    createAuth: React.PropTypes.func.isRequired,
    deleteAuth: React.PropTypes.func.isRequired
  }

  render () {
    return (
      <div className={styles['Header']}>
        <HeaderAccount {...this.props} />
      </div>
    )
  }
}

export default connect(mapStateToProps, {
  ...userActions
})(Header)
